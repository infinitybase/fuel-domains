import { Domain } from '@bako-id/sdk';
import { CopyIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Card, TextInput } from '..';
import { ExploreIcon } from '../icons/explore';
import { useSidebar } from '../sidebar/hooks/useSidebar';

interface IOwnershipCard {
  domain: Domain | null;
}
export const OwnershipCard = ({ domain }: IOwnershipCard) => {
  const { isMyDomain } = useSidebar();
  return (
    <Card
      w="full"
      h={['fit-content', 'fit-content', 'fit-content', 'full']}
      p={6}
      display="flex"
      flexDirection="column"
      gap={6}
    >
      <Flex alignItems="center" justify="space-between">
        <Heading fontSize="lg">Ownership</Heading>
        {isMyDomain && (
          <Button
            variant="ghosted"
            isDisabled={!isMyDomain}
            rightIcon={<MdOutlineKeyboardDoubleArrowRight />}
          >
            Extend
          </Button>
        )}
      </Flex>
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={3}
      >
        <TextInput
          leftAddon
          leftAddonName="owner"
          rightAddon
          rightAddonName={<Icon as={ExploreIcon} />}
          rightAddonClick={() =>
            window.open(
              `https://app.fuel.network/account/${domain?.owner}/assets`,
            )
          }
          value={domain?.owner}
        />
        <TextInput
          leftAddon
          leftAddonName="expiry"
          rightAddon
          rightAddonName={<Icon as={CopyIcon} />}
          value="march 31, 2024"
        />
      </Flex>
    </Card>
  );
};