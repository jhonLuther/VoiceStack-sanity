const generateButtonId = (uidData, componentName, componentType, btnName, parentName, includeParentName = false) => {
  const safeUidData = String(uidData || '');
  const safeComponentType = String(componentType || '');
  const safeComponentName = String(componentName || '');
  const safeBtnName = String(btnName || '').replace(/(\p{Extended_Pictographic}|\s)/gu, '');
  const safeParentName = String(parentName || '').replace(/(\p{Extended_Pictographic}|\s)/gu, '');

  let buttonId = `${safeUidData}-${safeComponentType || safeComponentName}-${safeBtnName}`;

  if (includeParentName && safeParentName) {
    buttonId = `${safeUidData}-${safeComponentType || safeComponentName}-${safeParentName}-${safeBtnName}`;
  }

  return buttonId || 'default-button-id';
};

export default generateButtonId;