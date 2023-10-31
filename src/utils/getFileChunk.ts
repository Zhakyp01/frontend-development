import logError from 'utils/logError';

const reader = new FileReader();

const getFileChunk = (file: File, start: number, end: number) => {

    return new Promise((resolve, _reject) => {
        try {
            const chunk = file.slice(start, end);

            reader.readAsArrayBuffer(chunk);
            reader.onloadend = event => {
                if(event.target && event.target.readyState === FileReader.DONE)
                {
                    const arrayBufferChunk = event.target.result;
                    const uint8Chunk = new Uint8Array(arrayBufferChunk as ArrayBufferLike);

                    resolve(uint8Chunk);
                };
            };

        } catch ({ message }) { logError(message as string); };
    });
};

export default getFileChunk;