import SceneNames from '../../../navigator/SceneNames';
import {colors} from '../../../themes';

export const tips = [
  {
    _id: '1',
    title: 'Los beneficios de la fibra',
    icon: 'tachometer',
    pts: '15',
    hour: '11:00',
    // action:'PhysicalActivitiesScreen'
    action: SceneNames.PhysicalActivities,
  },
  {
    _id: '2',
    title: 'Snack 100% natural',
    icon: 'apple',
    pts: '15',
    hour: '11:00',
    color: colors.purpleHard,
    // action:'FeedingSheetScreen'
    action: SceneNames.FeedingSheet,
  },
];
export const activities = [
  {
    _id: '1',
    title: 'Llevas 2 de 8 Vasos',
    icon: 'glass',
    pts: '10',
    hour: 'Agua',
    // action:'WaterSheetScreen'
    action: SceneNames.WaterSheet,
  },
  {
    _id: '2',
    title: '1 pastilla de acebutol',
    icon: 'apple',
    pts: '15',
    hour: '16:00',
    color: colors.purpleHard,
    // action:'MedicineScreen'
    action: SceneNames.Medicine,
  },
  {
    _id: '3',
    title: '10 gotitas de paracetamol',
    icon: 'apple',
    pts: '15',
    hour: '1 diaria',
    // action:'MedicineScreen'
    action: SceneNames.Medicine,
  },
];
export const activities2 = [
  {
    _id: '1',
    title: 'Caminata suave',
    icon: 'user',
    pts: '10',
    hour: 'Ejercicio',
    // action:'PhysicalActivitiesScreen',
    action: SceneNames.Form,
  },
  {
    _id: '2',
    title: 'Llevas 2 de 8 Vasos',
    icon: 'glass',
    pts: '10',
    hour: 'Agua',
    color: colors.purpleHard,
    // action:'WaterSheetScreen'
    action: SceneNames.WaterSheet,
  },
  {
    _id: '3',
    title: '10 gotitas de paracetamol',
    icon: 'apple',
    pts: '15',
    hour: '1 diaria',
    // action:'MedicineScreen'
    action: SceneNames.Medicine,
  },
];
