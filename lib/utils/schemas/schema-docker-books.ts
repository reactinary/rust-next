import { z } from "zod";

// ----------- FRONT ----------- //
export const DOCKER_BOOKS_SCHEMA = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	author: z.string().min(2, {
		message: "Author must be at least 2 characters.",
	}),
	num_pages: z.coerce.number(),
	tags: z.array(
		z.string().min(1, {
			message: "Tag must be at least 1 character.",
		}),
	),
});
export type Docker_Books_FormSchema = z.infer<typeof DOCKER_BOOKS_SCHEMA>;

// ----------- SERVER ----------- //
export const SERVER_DOCKER_BOOKS_SCHEMA = DOCKER_BOOKS_SCHEMA.extend({
	id: z.string(),
	// added_at: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
	// 	message: "Invalid date format.",
	// })
});
export type Docker_Books_ServerSchema = z.infer<
	typeof SERVER_DOCKER_BOOKS_SCHEMA
>;
