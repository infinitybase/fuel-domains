import { useParams } from '@tanstack/react-router';

export const usePurchased = () => {
  const { domain, transactionId } = useParams({ strict: false });
  // const navigate = useNavigate();
  // const { resolveDomain } = useDomain(domain);

  // useEffect(() => {
  //   resolveDomain
  //     .mutateAsync({
  //       domain,
  //     })
  //     .then((data) => {
  //       if (data === null) {
  //         navigate({
  //           to: '/',
  //           params: { domain: domain },
  //           startTransition: true,
  //         });
  //       }
  //     });
  // }, [domain]);

  return {
    domain,
    transactionId,
  };
};
