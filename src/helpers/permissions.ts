export const isReadPermission = (permissions: string[]) => {
  return permissions.includes('read') || permissions.includes('manage');
};
