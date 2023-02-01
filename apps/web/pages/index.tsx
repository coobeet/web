import { useMutation } from '@tanstack/react-query';
import { echo } from '@buf/coobeet_coobeet.bufbuild_connect-query/coobeet/v1/echo-EchoService_connectquery';
import { useState } from 'react';
import { Button } from '@coobeet/ui';

export default function Web() {
  const [input, setInput] = useState(``);
  const mutation = useMutation(echo.useMutation());

  return (
    <div>
      <h1>Web</h1>
      <p>
        <Button />
        <button onClick={() => mutation.mutate({ message: input })}>
          Send
        </button>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </p>
      <p>
        message: {mutation.isLoading ? `loading...` : mutation.data?.message}
      </p>
    </div>
  );
}
