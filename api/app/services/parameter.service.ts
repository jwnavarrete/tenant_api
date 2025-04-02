import { prisma } from "../../index";
import { IParamGeneral } from "../interfaces/parameter.interface";

export const getParameterById = async (id: string) => {
  const parameter = await prisma.globalParameter.findUnique({
    where: {
      id: id,
    },
  });

  return parameter;
};

export const createParameter = async (data: IParamGeneral) => {
  const newParameter = await prisma.globalParameter.create({
    data: {
      porcCobranza: data.porcCobranza,
      porcAbb: data.porcAbb,
      diasPlazoEmpresaAanmaning: data.diasPlazoEmpresaAanmaning,
      diasPlazoConsumidorAanmaning: data.diasPlazoConsumidorAanmaning,
      diasPlazoEmpresaSommatie: data.diasPlazoEmpresaSommatie,
      diasPlazoConsumidorSommatie: data.diasPlazoConsumidorSommatie,
      precioEmpresaPequena: data.precioEmpresaPequena,
      contribucionEmpresaPequenaPfc: data.contribucionEmpresaPequenaPfc,
      precioEmpresaGrande: data.precioEmpresaGrande,
      contribucionEmpresaGrandePfc: data.contribucionEmpresaGrandePfc,
    },
  });

  return newParameter;
};

export const updateParameter = async (
  id: string,
  data: Partial<IParamGeneral>
) => {
  const updatedParameter = await prisma.globalParameter.update({
    where: {
      id: id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });

  return updatedParameter;
};
