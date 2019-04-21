import { DocumentTypeEnum } from './termz.enums'
import { ApiGateway } from './api.gateway'

export * from './termz.enums';

export class Termz {
  private apiGateway = new ApiGateway(this.API_KEY);
  constructor(
    private API_KEY: string
  ) {
    if (!API_KEY) throw new Error('API Key must be specified');

  }

  async sign(userIdentifier: string, documentTypes: DocumentTypeEnum) {
    if (!documentTypes || !documentTypes.length) throw new Error('documentTypes must be provided');

    await this.apiGateway.post('/documents/sign', {
      identifier: userIdentifier,
      documentTypes
    });
  }
}
