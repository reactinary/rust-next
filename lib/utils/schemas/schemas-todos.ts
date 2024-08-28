import { z } from "zod";

// ----------- FRONT ----------- //
export const TODO_SCHEMA = z.object({
	title: z.string().min(2, {
		message: "Title must be at least 2 characters.",
	}),
	date: z.coerce.number(),
});
export type Todos_FormSchema = z.infer<typeof TODO_SCHEMA>;

// ----------- SERVER ----------- //
export const SERVER_TODO_SCHEMA = TODO_SCHEMA.extend({
	id: z.number(),
});
export type Todos_ServerSchema = z.infer<typeof SERVER_TODO_SCHEMA>;

export const ARRAY_SERVER_SCHEMA_TODO = z.array(SERVER_TODO_SCHEMA);
