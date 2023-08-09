import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"sk1GYmF9UZlcpybAEJpAtNoPWkBPJTFVixpLzVYX8oNefq5AKGWQ14CHix36ybzutk8vn3Q1XVWmZcLQn6aWSJY5ZuNP80QwH4c32hAxnaj7jBD0aM5msWxTp9K3vMM9hPBrXGRWvfLL9aoDVIiXXKyAi3EtkGINWkBek5CqNnAvnTYFWgHf"
})
