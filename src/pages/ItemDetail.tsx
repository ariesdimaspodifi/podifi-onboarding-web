import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetailsCard from "../components/ItemDetailsCard";
import axios from "axios";

const ItemDetail: FunctionComponent = () => {
  const navigate = useNavigate();
  const [itemDetail, setItemDetail] = useState<any>(null);

  const onBackButtonFrameIconClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const { menuItemCode } = useParams();

  const fetchItemDetail = async () => {
    const response = await axios.get(`http://localhost:3000/data/${menuItemCode}`);
    setItemDetail(response.data);
  };

  useEffect(() => {
    fetchItemDetail();
  }, [menuItemCode]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden flex flex-col items-start justify-start sm:flex-col">
      <section className="self-stretch flex flex-col items-start justify-start py-[43px] px-5 gap-[20px]">
        <header className="self-stretch flex flex-row items-start justify-start gap-[36px] text-left text-13xl text-gray-100 font-aleo">
          <img
            className="relative w-[37px] h-[37px] overflow-hidden shrink-0 object-cover cursor-pointer"
            alt=""
            src="/backbuttonframe@2x.png"
            onClick={onBackButtonFrameIconClick}
          />
          <div className="flex flex-row items-start justify-start">
            <b className="relative">Item Detail</b>
          </div>
        </header>
        <div className="self-stretch h-[1.1px] flex flex-col items-start justify-start">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0 object-cover"
            alt=""
            src={itemDetail?.image}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-5 px-0">
          <ItemDetailsCard
            itemDetailsCardItemImage="/itemdetailscarditemimageframe@2x.png"
            itemDetailsCardItemName={itemDetail?.name}
            itemDetailsCardItemPrice={itemDetail?.price}
            itemDetailsCardItemDescription={itemDetail?.description}
          />
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
