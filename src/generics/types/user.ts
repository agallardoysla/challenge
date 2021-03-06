import {Preferences} from '../../modules/interest/types';
import {Objetives} from '../../modules/objetives/types';

export type UserResponse = {
  id?: string;
  paisId?: number;
  nombres?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  edad?: number;
  genero?: string;
  update_at?: Date;
  created_at?: Date;
  alias?: string;
  clasificacionActividadEjercicioId?: number;
  clasificaciĆ³nFichaAguaId?: number;
  clasificacionConsejoId?: number;
  correoElectronico?: string | null;
  treatment?: string | null;
  objetivos?: Objetives | [];
  preferencia?: Preferences | [];
  aceptoTerminosYCondiciones?: boolean | null | undefined;
};

export type SendUser = {
  id?: string;
  paisId?: number;
  nombres?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  edad?: number;
  genero?: string;
  update_at?: Date;
  created_at?: Date;
  alias?: string;
  clasificacionActividadEjercicioId?: number | null;
  clasificaciĆ³nFichaAguaId?: number | null;
  clasificacionConsejoId?: number | null;
  correoElectronico?: string | null;
  objetivos?: Objetives | [];
  preferencia?: Preferences | [];
  treatment?: string | null;
  aceptoTerminosYCondiciones?: boolean | null | undefined;
};

export type User = {
  id: string;
  paisId: number;
  nombres?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  edad?: number;
  genero?: string;
  update_at?: Date;
  created_at?: Date;
  alias: string;
  clasificacionActividadEjercicioId?: number;
  clasificaciĆ³nFichaAguaId?: number;
  clasificacionConsejoId?: number;
  correoElectronico?: string | null;
  objetivos?: Objetives | [];
  preferencia?: Preferences | [];
  treatment?: string | null;
  aceptoTerminosYCondiciones?: boolean | null | undefined;
};
