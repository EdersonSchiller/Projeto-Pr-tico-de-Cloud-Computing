export async function lookupCep(cep8) {
  if (!/^\d{8}$/.test(cep8)) throw new Error("CEP inválido.");
  const resp = await fetch(`https://viacep.com.br/ws/${cep8}/json/`, {
    headers: { Accept: "application/json" },
  });
  if (!resp.ok) throw new Error("Falha HTTP");
  return resp.json();
}
