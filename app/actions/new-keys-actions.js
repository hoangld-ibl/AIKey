
export const NEW_KEYS = 'NEW_KEYS';

export function newKeys(keys) {
    return {
        type: NEW_KEYS,
        keys,
    };
}