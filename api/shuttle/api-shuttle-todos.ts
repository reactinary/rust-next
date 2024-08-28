import type { TTodo_Form, TTodo_Server } from "@/lib/utils/schemas/schema-todos";
import { shuttleClientTODOS } from "../clients/shuttle-client-todos";

const BASE_URL = "todos";

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                       ✨ QUERIES ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const GetAllTodos_Shuttle = (): Promise<TTodo_Server[]> =>
  shuttleClientTODOS.remote.get(BASE_URL).then((res) => res.data);
// TODO. Validate HTTP response

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                      ✨ MUTATIONS ✨                       */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export const addTodo_Shuttle = (todo: TTodo_Form) =>
  shuttleClientTODOS.remote.post(BASE_URL, todo).then((res) => res.data);

export const deleteTodo_Shuttle = (id: number) =>
  shuttleClientTODOS.remote.delete(`${BASE_URL}/${id}`).then((res) => res.data);

export const patchTodo_Shuttle = (id: number, todo: TTodo_Form) =>
  shuttleClientTODOS.remote.patch(`${BASE_URL}/${id}`, todo).then((res) => res.data);
