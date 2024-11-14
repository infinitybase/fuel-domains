import { Suspense } from 'react';
import { Card } from '.';
import { Button, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { NSDialog } from '../nsDialog';

export const NSCard = () => {
  return (
    <>
      <NSDialog />
      <Suspense>
        <Card
          backdropFilter="blur(7px)"
          h="fit-content"
          maxW={['full', '45rem']}
        >
          <CardHeader w="full">
            <Heading fontSize="lg" color="grey.100">
              Import Data from NS
            </Heading>
          </CardHeader>
          <CardBody
            mt={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={8}
          >
            <Text fontSize="xs" color="grey.200" lineHeight="12.1px">
              Importing data will replace your connected social media accounts
              and update your nickname to match the imported account.
            </Text>
            <Button variant="primary" maxW="112px">
              Import
            </Button>
          </CardBody>
        </Card>
      </Suspense>
    </>
  );
};