import { Maybe, User } from "../../../graphql/graphql.ts";
import { Option } from "../../../components/filters/types.ts";

export function assignedUserDataToSingleSelectInput(
  filtersData: Maybe<User[]> | undefined,
): Option[] {
  return (filtersData || []).map((item: User) => ({
    value: item.email,
    label: item.email,
  }));
}
