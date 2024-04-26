import { z } from "zod"

export const PriceSchema = z.object({
    min: z.number().min(0),
    max: z.number().min(0).max(1000)
});

export const includeNameSchema = z.object({
    includes: z.string(),
});

export const QuerySchema = z.union([
    PriceSchema,
    includeNameSchema,
]);

export const hotelPrice = z.array({
    name: z.string,
    pricePerNightInUSD: z.number
})