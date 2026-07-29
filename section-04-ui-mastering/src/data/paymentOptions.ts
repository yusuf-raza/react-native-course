import CashIcon from "@/components/icons/CashIcon";
import MastercardIcon from "@/components/icons/MastercardIcon";
import PaypalIcon from "@/components/icons/PaypalIcon";
import VisaIcon from "@/components/icons/VisaIcon";

// Store icon component types, similar to storing a Flutter WidgetBuilder.
export const paymentOptions = [
  {
    id: '1',
    icon: CashIcon,
    title: 'Cash',
  },
  {
    id: '2',
    icon: VisaIcon,
    title: 'Visa',

  },
  {
    id: '3',
    icon: MastercardIcon,
    title: 'Mastercard',

  },
  {
    id: '4',
    icon: PaypalIcon,
    title: 'PayPal',

  },
]
