import { useDispatch, useSelector } from "react-redux";
import {
  SetEmail,
  SetPerfectMoneyFormValue,
} from "../../redux/features/account/accountSlice.js";
import { SetModalOpen } from "../../redux/features/modal/modalSlice.js";
import OrderModal from "../modal/OrderModal.jsx";
import Error from "../validation/Error.jsx";
import { useState } from "react";

const PerfectMoney = () => {
  const dispatch = useDispatch();
  const { email, PerfectMoneyFormValue } = useSelector(
    (state) => state.account
  );
  const { perfectUID, contactNumber } = PerfectMoneyFormValue;
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (email === "" || perfectUID === "" || contactNumber === "") {
      setError("All fields are required.!");
    } else {
      setError("");
      dispatch(SetModalOpen(true));
    }
  };

  return (
    <>
      <section className="bg-[#f7f7f7] min-h-[80vh] py-10 flex items-center">
        <div className="flex-1">
          <div className="md:px-12 flex justify-center">
            <div className="w-3/4 sm:w-1/2">
              <h1 className="text-3xl mb-3 ">Additional Information</h1>
              {error && <Error message={error} />}
              <div className="mb-3 mt-3">
                <label className="block pb-2" htmlFor="email">
                  Your Email Address
                </label>
                <input
                  onChange={(e) => dispatch(SetEmail(e.target.value))}
                  value={email}
                  className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                  type="email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label className="block pb-2" htmlFor="number">
                  Perfect Money UID EX: U38448381
                </label>
                <input
                  onChange={(e) =>
                    dispatch(
                      SetPerfectMoneyFormValue({
                        property: "perfectUID",
                        value: e.target.value,
                      })
                    )
                  }
                  value={perfectUID}
                  className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                  type="text"
                  id="number"
                />
              </div>
              <div className="mb-3">
                <label className="block pb-2" htmlFor="contact">
                  Contact Mobile Number.
                </label>
                <input
                  onChange={(e) =>
                    dispatch(
                      SetPerfectMoneyFormValue({
                        property: "contactNumber",
                        value: e.target.value,
                      })
                    )
                  }
                  value={contactNumber}
                  className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                  type="email"
                  id="contact"
                />
              </div>
            </div>
          </div>
          <div className="md:px-12 flex justify-center gap-8 mt-6">
            <button
              onClick={handleSubmit}
              className="bg-[#0090D4] text-white rounded-md px-12 py-3"
            >
              Process Exchange
            </button>
          </div>
        </div>
      </section>

      <OrderModal />
    </>
  );
};

export default PerfectMoney;
