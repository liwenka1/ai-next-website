import { fetchRequest } from "@/request/fetchRequest";

import type {
  BigmodelGenerationsRequest,
  BigmodelGenerationsResponse,
  AsyncResultRequest,
  AsyncResultResponse
} from "./type";

export const useVideosApi = () => {
  const bigmodelGenerations = (params: BigmodelGenerationsRequest) => {
    return fetchRequest<BigmodelGenerationsResponse>("/videos/bigmodel/generations", {
      body: JSON.stringify(params),
      method: "POST"
    });
  };

  const asyncResult = (params: AsyncResultRequest) => {
    return fetchRequest<AsyncResultResponse>("/videos/async-result/" + params.id);
  };

  return {
    bigmodelGenerations,
    asyncResult
  };
};
