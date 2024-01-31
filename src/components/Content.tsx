import React, {PropsWithChildren} from 'react';
import {Box} from '@gluestack-ui/themed';

export function Content({children}: PropsWithChildren) {
  return (
    <Box w="$80" p="$5">
      {children}
    </Box>
  );
}
