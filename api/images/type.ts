export interface BigmodelGenerationsResponse {
  created: number;
  data: { url: string }[];
}

export interface BigmodelGenerationsRequest {
  prompt: string;
  size?: "1024x1024" | "768x1344" | "864x1152" | "1344x768" | "1152x864" | "1440x720" | "720x1440";
}
