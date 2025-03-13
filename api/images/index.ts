import { fetchRequest } from "@/request/fetchRequest";

import type { BigmodelGenerationsRequest, BigmodelGenerationsResponse } from "./type";

export const useImagesApi = () => {
  const bigmodelGenerations = (params: BigmodelGenerationsRequest) => {
    return fetchRequest<BigmodelGenerationsResponse>("/images/bigmodel/generations", {
      body: JSON.stringify(params),
      method: "POST"
    });
  };

  return {
    bigmodelGenerations
  };
};
