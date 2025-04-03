import { prisma } from "../../index";
import { IParamGeneral } from "../interfaces/parameter.interface";

class ParameterService {
  async getParameterById(id: string) {
    const parameter = await prisma.globalParameter.findUnique({
      where: {
        id: id,
      },
    });

    return parameter;
  }

  async createParameter(data: IParamGeneral) {
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
  }

  async updateParameter(id: string, data: Partial<IParamGeneral>) {
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
  }
}

export const parameterService = new ParameterService();
