import React from 'react';

import { DeactivateOperation, IDeactivateOperationProps } from '.';

export default {
  title: 'Sidetree/Operations',
  component: DeactivateOperation,
};

const deactivate = {
  type: 'deactivate',
  did_suffix: 'EiBKP-cspvQlz8eymq6kOtIo8awHFAhZomJtsGF_QS9KqA',
  signed_data:
    'eyJhbGciOiJFUzI1NksifQ.eyJkaWRfc3VmZml4IjoiRWlCS1AtY3NwdlFsejhleW1xNmtPdElvOGF3SEZBaFpvbUp0c0dGX1FTOUtxQSIsInJlY292ZXJ5X2tleSI6eyJrdHkiOiJFQyIsImNydiI6InNlY3AyNTZrMSIsIngiOiJhcEZIZDFBN3lyQmY1QlFhalREakJHM3RlemNlZ2xJVlFPRWpaRV9MME93IiwieSI6Ik5vOEZxRHNldnVObGxiRkUtN0dkVUhsWHhmRnJmb0RpenloSnZyREgzSHMifX0.MkMCZ0Ns6FfhL9Wg5N1F-QOxglKaIWcYZsrBShkWnbKl7VCs1B2TDiqeZd6qzs6DQ1_EDWUrajAao2S8jauk5Q',
};

const didMethodPrefix = 'elem:ropsten';

export const Deactivate = (props?: Partial<IDeactivateOperationProps>) => (
  <div style={{ padding: '8px' }}>
    <DeactivateOperation
      didMethodPrefix={didMethodPrefix}
      operation={deactivate}
      {...props}
    />
  </div>
);
