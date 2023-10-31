import logError from 'utils/logError';
import variables from 'env/variables';

const getAlgorithm = (passkey: string) => {
    try {
        const repetitons = Math.floor(variables.IV_SIZE/passkey.length);
        const stringVector = ((repetitons === 0)
            ? passkey
            : passkey.repeat(repetitons + 1))
                .substring(0, variables.IV_SIZE);

        const bitVector = new TextEncoder().encode(stringVector);

        return { name: variables.ALGO, iv: bitVector };

    } catch ({ message }) { logError(message as string); };
};

export default getAlgorithm;