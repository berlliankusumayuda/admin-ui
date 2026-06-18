import OverviewSVG from "../../assets/Icons/Overview.svg?react";
import TransactionSVG from "../../assets/Icons/Transaction.svg?react";
import BalanceSVG from "../../assets/Icons/wallet.svg?react";
import BillSVG from "../../assets/Icons/Bill.svg?react";
import ExpenseSVG from "../../assets/Icons/Expencces.svg?react";
import GoalSVG from "../../assets/Icons/Goal.svg?react";
import SettingSVG from "../../assets/Icons/Settings.svg?react";
import DetailSVG from "../../assets/Icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/Icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/Icons/Icon2.svg?react";
import AdobeSVG from "../../assets/Icons/Adobe.svg?react";
import FigmaSVG from "../../assets/Icons/Figma.svg?react";
import FoodSVG from "../../assets/Icons/Food.svg?react";
import GamepadSVG from "../../assets/Icons/gamepad-2.svg?react";
import HouseSVG from "../../assets/Icons/Housing.svg?react";
import MovieSVG from "../../assets/Icons/Movie.svg?react";
import OtherSVG from "../../assets/Icons/Others.svg?react";
import ShoppingSVG from "../../assets/Icons/Shopping.svg?react";
import TransportSVG from "../../assets/Icons/Trasnport.svg?react";
import ArrowRightSVG from "../../assets/Icons/arrow-right.svg?react";
import ArrowDownSVG from "../../assets/Icons/Downarrow.svg?react";
import ArrowUpSVG from "../../assets/Icons/Uparrow.svg?react";
import ArrowUpRightSVG from "../../assets/Icons/arrow-up-right.svg?react";
import EditSVG from "../../assets/Icons/edit.svg?react";
import MastercardSVG from "../../assets/Icons/Mastercard-Logo.svg?react";
import VisaSVG from "../../assets/Icons/Visa_Logo.svg?react";
import TargetSVG from "../../assets/Icons/target.svg?react";
import AwardSVG from "../../assets/Icons/Award.svg?react";

const createIcon =
  (SVG) =>
  ({ size = 24, color = "currentColor", ...props }) =>
    <SVG width={size} height={size} stroke={color} {...props} />;

const Icon = {
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),
  Adobe: createIcon(AdobeSVG),
  Figma: createIcon(FigmaSVG),
  Food: createIcon(FoodSVG),
  Gamepad: createIcon(GamepadSVG),
  House: createIcon(HouseSVG),
  Movie: createIcon(MovieSVG),
  Other: createIcon(OtherSVG),
  Shopping: createIcon(ShoppingSVG),
  Transport: createIcon(TransportSVG),
  ArrowRight: createIcon(ArrowRightSVG),
  ArrowDown: createIcon(ArrowDownSVG),
  ArrowUp: createIcon(ArrowUpSVG),
  Edit: createIcon(EditSVG),
  Mastercard: createIcon(MastercardSVG),
  Visa: createIcon(VisaSVG),
  Target: createIcon(TargetSVG),
  Award: createIcon(AwardSVG),
  ArrowUpRight: createIcon(ArrowUpRightSVG),
};

export default Icon;
