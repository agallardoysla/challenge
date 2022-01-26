import {useLazyQuery, useMutation} from '@apollo/client';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useRequestContext} from '../../../context/RequestContext';
import {useUserContext} from '../../../context/UserContext';
import {
  currentDateInMilliseconds,
  firstDate,
} from '../../../generics/helpers/anotherDates';
import useUser from '../../../generics/hook/useUser';
import useFeedingSheet from '../../feedingSheet/hooks/useFeedingSheet';
import useMedicine from '../../medicine/hooks/useMedicine';
import usePhysicalActivies from '../../physicalActivities/hooks/usePhysicalActivities';
import {
  DELETE_COMPLETE_DAILY_ACHIEVEMENT,
  SEND_COMPLETE_DAILY_ACHIEVEMENT,
} from '../gql/mutation';
import {GET_COMPLETED_DAILY_ACHIEVEMENTS} from '../gql/querys';
import {CompletedDailyAchievements} from '../types';
import {renameCompletedDailyAchievements} from '../utils/rename';

const useGetDataHome = () => {
  const [completedDailyAchievements, setCompletedDailyAchievements] =
    useState<CompletedDailyAchievements>([]);
  const [dataObtained, setDataObtained] = useState(false);

  const [{user}] = useUserContext();
  const [{}, {loadingHandler, errorHandler}] = useRequestContext();

  const {getUser} = useUser();
  const {advices, advicesData, getTodayAdvices} = useFeedingSheet();
  const {
    prescriptionMedicines,
    prescriptionsData,
    getTodayPrescriptionMedicine,
  } = useMedicine();
  const {physicalActivies, physicalActivitiesData, getTodayPhysicalActivies} =
    usePhysicalActivies();

  const [
    getCompletedDailyAchievements,
    {
      loading: completedDailyAchievementsLoading,
      error: completedDailyAchievementsError,
      data: completedDailyAchievementsData,
    },
  ] = useLazyQuery(GET_COMPLETED_DAILY_ACHIEVEMENTS, {
    onCompleted: data => {
      const modifiedCompletedDailyAchievements =
        renameCompletedDailyAchievements(data?.logrosDiarios);
      setCompletedDailyAchievements(modifiedCompletedDailyAchievements);
    },
    fetchPolicy: 'network-only',
  });

  const getAllCompletedDailyAchievements = () => {
    if (user?.id) {
      getCompletedDailyAchievements({
        variables: {
          _gte: firstDate,
          _lte: currentDateInMilliseconds,
        },
      });
    }
  };

  useEffect(() => {
    loadingHandler(completedDailyAchievementsLoading);
    completedDailyAchievementsError &&
      errorHandler(completedDailyAchievementsError.message);
  }, [completedDailyAchievementsLoading, completedDailyAchievementsError]);

  const [insertCompleteDailyAchievement] = useMutation(
    SEND_COMPLETE_DAILY_ACHIEVEMENT,
  );

  const sendCompleteDailyAchievement = (
    answer: boolean,
    date: number,
    dayWeek: number,
  ) => {
    user?.id &&
      insertCompleteDailyAchievement({
        variables: {
          usuarioId: user?.id,
          respuesta: answer,
          fecha: date,
          diaSemana: dayWeek,
        },
      })
        .then(() => getAllCompletedDailyAchievements())
        .catch(error => {
          errorHandler(error.message);
        });
  };

  const [deleteCompleteDailyAchievement] = useMutation(
    DELETE_COMPLETE_DAILY_ACHIEVEMENT,
  );

  const removeCompleteDailyAchievement = (
    completeDailyAchievementId: number,
  ) => {
    deleteCompleteDailyAchievement({
      variables: {
        id: completeDailyAchievementId,
      },
    })
      .then(() => getAllCompletedDailyAchievements())
      .catch(error => {
        errorHandler(error.message);
      });
  };

  useEffect(() => {
    advicesData &&
      prescriptionsData &&
      physicalActivitiesData &&
      completedDailyAchievementsData &&
      setDataObtained(true);
  }, [
    advicesData,
    prescriptionsData,
    physicalActivitiesData,
    completedDailyAchievementsData,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      getUser();
      getTodayAdvices();
      getTodayPrescriptionMedicine();
      getTodayPhysicalActivies();
      getAllCompletedDailyAchievements();
    }, []),
  );

  return {
    advices,
    prescriptionMedicines,
    physicalActivies,
    completedDailyAchievements,
    dataObtained,
    sendCompleteDailyAchievement,
    removeCompleteDailyAchievement,
  };
};

export default useGetDataHome;
