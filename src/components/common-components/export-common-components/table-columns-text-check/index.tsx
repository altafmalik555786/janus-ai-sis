import { getUserOnRole } from "@utils/common-functions";
import { DOUBLE_DASH } from "@utils/const";

export const ColTextCheck = (text) => {
  return (
    <p>
      {text ||
        ((typeof text === "number" || typeof text === "string") &&
        Number(text) === 0
          ? 0
          : DOUBLE_DASH)}
    </p>
  );
};

export const ColUserOnRole = (role) => <p>{getUserOnRole(role)?.name}</p>;
