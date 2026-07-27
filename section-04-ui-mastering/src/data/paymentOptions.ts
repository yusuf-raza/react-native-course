import CashIcon from "@/components/icons/CashIcon";
import MastercardIcon from "@/components/icons/MastercardIcon";
import PaypalIcon from "@/components/icons/PaypalIcon";
import VisaIcon from "@/components/icons/VisaIcon";

// `icon` holds the component REFERENCE (no parens, no JSX) — the file stays .ts
// because there is no markup in it. PaymentCard is what turns each reference
// into an element with <Icon />.
// Flutter parallel: storing a WidgetBuilder / Type rather than a built Widget.
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
