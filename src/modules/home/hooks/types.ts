export type LogroDiario = {
  id: number | undefined;
  respuesta: boolean | undefined;
  fecha: boolean | undefined;
  diaSemana: number | undefined;
};

export type LogrosDiarios = LogroDiario[] | null[];
