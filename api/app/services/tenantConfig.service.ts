import { prisma } from "../../index";
import {
  IParamCobro,
  ITenantConfigResponse,
} from "../interfaces/tenantConfig.interface";
import { tenantConfigResponseSchema } from "../schemas/tenantConfig.schema";

class TenantConfigService {
  /// Get all tenant configs
  async getTenantConfig(
    tenantId: string,
    parameterId: string
  ): Promise<ITenantConfigResponse> {
    const tenantConfig = await prisma.tenantConfig.findFirst({
      where: {
        tenantId: tenantId,
        parameterId: parameterId,
      },
      include: {
        parameter: true,
      },
    });

    if (!tenantConfig) {
      throw new Error("Tenant config not found");
    }

    const tenantConfigResponse = tenantConfigResponseSchema.parse(tenantConfig);
    return tenantConfigResponse;
  }

  async updateTenantConfig(
    tenantId: string,
    parameterId: string,
    data: Partial<IParamCobro>
  ): Promise<ITenantConfigResponse> {
    const tenantConfig = await prisma.tenantConfig.findFirst({
      where: {
        tenantId: tenantId,
        parameterId: parameterId,
      },
    });

    if (!tenantConfig) {
      throw new Error("Tenant config not found");
    }

    if (tenantConfig.tenantId !== tenantId) {
      throw new Error("Tenant ID does not match");
    }

    if (tenantConfig.parameterId !== parameterId) {
      throw new Error("Parameter ID does not match");
    }

    await prisma.tenantConfig.update({
      where: {
        tenantId_parameterId: {
          tenantId: tenantId,
          parameterId: parameterId,
        },
      },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    return this.getTenantConfig(tenantId, parameterId);
  }
}

export const tenantConfigService = new TenantConfigService();
