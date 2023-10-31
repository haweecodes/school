export const findObjectByType = ({list, type}: {
    list: Record<string, unknown>[],
    type: string
}) => {
    for (const obj of list) {
      if (String(obj.type) === type) {
        return obj;
      }
    }
    return null;
  }