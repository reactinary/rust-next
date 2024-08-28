import { z } from "zod";

// ----------- FRONT ----------- //
export const PIZZA_SCHEMA = z.object({
	pizza_name: z.string().min(2, {
		message: "Pizza name must be at least 2 characters.",
	}),
});
export type TPizza_FormSchema = z.infer<typeof PIZZA_SCHEMA>;

// ----------- SERVER ----------- //
export const SERVER_PIZZA_SCHEMA = PIZZA_SCHEMA.extend({
	uuid: z.string(),
});
export type TPizzas_Server = z.infer<typeof SERVER_PIZZA_SCHEMA>;

export const ARRAY_SERVER_SCHEMA_PIZZA = z.array(SERVER_PIZZA_SCHEMA);
