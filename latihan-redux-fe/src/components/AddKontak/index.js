import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/KontakAction";

function AddKontak(props) {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };
  const { addKontakResult } = useSelector((state) => state.KontakReducer);

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h1>Add Kontak</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          id="nama"
          placeholder="Nama..."
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          name="nohp"
          id="nohp"
          placeholder="Nomor Handphone..."
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
