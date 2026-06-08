import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJarEntries } from "../../hooks/useJarEntries";

import LockedJar from "../jars/LockedJar";
import Loading from "../../../../components/Loading";
import GoBack from "../../../../components/GoBack";
import JarEntriesList from "./JarEntriesList";
import AddEntry from "./AddEntry";
import Header from "../../../../components/Header";
import ErrorMessage from "../../../../components/ErrorMessage";

function JarEntries() {
  const { theme, id } = useParams();

  const { data, isLoading, isError, error } = useJarEntries(Number(id));
  const jarIsLocked = !data || new Date(data.locked_until) > new Date();
  const jarHasEntries = data?.jar_entries.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (!jarIsLocked) {
      navigate(`/home/unsealed/ideas/${id}`, { replace: true });
    }
  }, [jarIsLocked, id, navigate]);

  if (isLoading) return <Loading />;

  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <>
      <Header
        navigation={<GoBack />}
        actions={jarIsLocked ? <AddEntry jarId={id} /> : null}
      />

      {jarIsLocked ? (
        <LockedJar data={data} jarHasEntries={jarHasEntries} jarId={id} />
      ) : (
        <JarEntriesList data={data} theme={theme} />
      )}
    </>
  );
}

export default JarEntries;
