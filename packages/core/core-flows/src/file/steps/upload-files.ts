import { IFileModuleService } from "@srinivasulu-narayanam/framework/types"
import { Modules } from "@srinivasulu-narayanam/framework/utils"
import { StepResponse, createStep } from "@srinivasulu-narayanam/framework/workflows-sdk"

export type UploadFilesStepInput = {
  files: {
    filename: string
    mimeType: string
    content: string
    access: "public" | "private"
  }[]
}

export const uploadFilesStepId = "upload-files"
/**
 * This step uploads one or more files.
 */
export const uploadFilesStep = createStep(
  uploadFilesStepId,
  async (data: UploadFilesStepInput, { container }) => {
    const service = container.resolve<IFileModuleService>(Modules.FILE)
    const created = await service.createFiles(data.files)
    return new StepResponse(
      created,
      created.map((file) => file.id)
    )
  },
  async (createdIds, { container }) => {
    if (!createdIds?.length) {
      return
    }

    const service = container.resolve<IFileModuleService>(Modules.FILE)

    await service.deleteFiles(createdIds)
  }
)
