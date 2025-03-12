import { fetchRequest } from "@/request/fetchRequest";

export interface BigmodelGenerationsResponse {
  created: number;
  data: Daum[];
}

export interface Daum {
  url: string;
}

export const useImagesApi = () => {
  const bigmodelGenerations = (prompt: string) => {
    return fetchRequest<BigmodelGenerationsResponse>("/images/bigmodel/generations", {
      body: JSON.stringify({
        prompt
      }),
      method: "POST"
    });
  };

  return {
    bigmodelGenerations
  };
};
