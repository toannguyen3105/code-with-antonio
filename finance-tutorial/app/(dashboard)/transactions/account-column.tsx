import useOpenAccount from "@/features/accounts/hooks/use-open-account";

type Props = {
  account: string;
  accountId: string;
};

const AccountColumn = ({ account, accountId }: Props) => {
  const { onOpen: onOpenAcount } = useOpenAccount();

  const onClick = () => {
    onOpenAcount(accountId);
  };

  return (
    <div
      className="flex items-center cursor-pointer hover:underline"
      onClick={onClick}
    >
      {account}
    </div>
  );
};

export default AccountColumn;
