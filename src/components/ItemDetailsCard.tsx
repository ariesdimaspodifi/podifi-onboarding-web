import { FunctionComponent, useCallback, useState } from "react";
import { Input, Toast, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { IOrder } from "../dto/order.dto";

type ItemDetailsCardType = {
  itemDetailsCardItemImage?: string;
  itemDetailsCardItemName?: string;
  itemDetailsCardItemPrice?: string;
  itemDetailsCardItemDescription?: string;
};

const ItemDetailsCard: FunctionComponent<ItemDetailsCardType> = ({
  itemDetailsCardItemImage,
  itemDetailsCardItemName,
  itemDetailsCardItemPrice,
  itemDetailsCardItemDescription,
}) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [quantity, setQuantity] = useState(1);

  const [order, setOrder] = useState<IOrder[]>([]);

  const onButtonContainerClick = useCallback(() => {
    console.log(quantity);
    if(quantity < 1){
      toast({
        title: 'Quantity must be greater than 0',
        status: 'error',
        isClosable: true,
        position: 'top-right',

      });
      return;
    }



    navigate("/homepage");
   
  }, [navigate]);

  return (
    <div className="bg-white flex flex-row items-start justify-start gap-[41px] text-left text-3xl text-gray-300 font-aleo sm:flex-col sm:gap-[41px] sm:items-center sm:justify-start">
      <img
        className="relative w-[238px] h-[227px] object-cover sm:flex"
        alt=""
        src={itemDetailsCardItemImage}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] sm:items-start sm:justify-start">
        <div className="flex-1 flex flex-row items-center justify-start gap-[50px] sm:flex-col">
          <div className="flex flex-col items-start justify-start gap-[5px] md:flex-col md:gap-[15px] md:pb-0 md:box-border sm:flex-col sm:items-center sm:justify-start">
            <div className="flex flex-row items-start justify-start md:h-auto md:flex-row sm:flex-col">
              <b className="relative">{itemDetailsCardItemName}</b>
            </div>
            <div className="flex flex-col items-start justify-start text-base md:flex-row">
              <b className="relative">{itemDetailsCardItemPrice}</b>
            </div>
          </div>
          <div className="w-[539px] flex flex-row items-start justify-start text-base sm:w-auto sm:[align-self:unset]">
            <div className="flex-1 relative sm:flex">
              <b className="relative">{itemDetailsCardItemDescription}</b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-end gap-[50px] sm:flex-col sm:gap-[20px] sm:items-end sm:justify-start">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <button onClick={() => setQuantity(quantity + 1)}>
              <img
                className="relative rounded-10xs w-[23px] h-[23px] object-cover"
                alt=""
                src="/itemdetailscardincrementquantityframe@2x.png"
              />
            </button>
            <Input
              className="bg-[transparent] font-aleo font-bold text-base text-gray-100 text-center"
              placeholder="1"
              size="sm"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={() => setQuantity(quantity - 1)}>
            <img
                className="relative rounded-10xs w-[23px] h-[23px] object-cover"
                alt=""
              src="/itemdetailscarddecrementquantityframe@2x.png"
            />
            </button>
             
          </div>
          <Button
            buttonText="Add To Order"
            onButtonContainerClick={onButtonContainerClick}
            buttonMinWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsCard;
