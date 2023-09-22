import MessageResponse from "../../../interfaces/MessageResponse";
import Phone from "../../../models/interfaces/Phone";

type PhonesResponse = Phone[] | Phone | MessageResponse;

export default PhonesResponse;
