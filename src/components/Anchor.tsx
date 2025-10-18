'use client';

import { haptic } from 'ios-haptics';
import React from 'react';

export const Anchor: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return <a {...props} onClick={haptic} />;
};
