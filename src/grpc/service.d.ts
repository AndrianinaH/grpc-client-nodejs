import * as $protobuf from "protobufjs";
/** Namespace employe. */
export namespace employe {

    /** Represents an EmployeService */
    class EmployeService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EmployeService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EmployeService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EmployeService;

        /**
         * Calls FindOne.
         * @param request EmployeById message or plain object
         * @param callback Node-style callback called with the error, if any, and Employe
         */
        public findOne(request: employe.IEmployeById, callback: employe.EmployeService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request EmployeById message or plain object
         * @returns Promise
         */
        public findOne(request: employe.IEmployeById): Promise<employe.Employe>;

        /**
         * Calls FindAll.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and EmployeList
         */
        public findAll(request: employe.IEmpty, callback: employe.EmployeService.FindAllCallback): void;

        /**
         * Calls FindAll.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public findAll(request: employe.IEmpty): Promise<employe.EmployeList>;

        /**
         * Calls Create.
         * @param request EmployeCreate message or plain object
         * @param callback Node-style callback called with the error, if any, and Employe
         */
        public create(request: employe.IEmployeCreate, callback: employe.EmployeService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request EmployeCreate message or plain object
         * @returns Promise
         */
        public create(request: employe.IEmployeCreate): Promise<employe.Employe>;

        /**
         * Calls Update.
         * @param request Employe message or plain object
         * @param callback Node-style callback called with the error, if any, and Employe
         */
        public update(request: employe.IEmploye, callback: employe.EmployeService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request Employe message or plain object
         * @returns Promise
         */
        public update(request: employe.IEmploye): Promise<employe.Employe>;

        /**
         * Calls Delete.
         * @param request EmployeById message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteRet
         */
        public delete(request: employe.IEmployeById, callback: employe.EmployeService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request EmployeById message or plain object
         * @returns Promise
         */
        public delete(request: employe.IEmployeById): Promise<employe.DeleteRet>;
    }

    namespace EmployeService {

        /**
         * Callback as used by {@link employe.EmployeService#findOne}.
         * @param error Error, if any
         * @param [response] Employe
         */
        type FindOneCallback = (error: (Error|null), response?: employe.Employe) => void;

        /**
         * Callback as used by {@link employe.EmployeService#findAll}.
         * @param error Error, if any
         * @param [response] EmployeList
         */
        type FindAllCallback = (error: (Error|null), response?: employe.EmployeList) => void;

        /**
         * Callback as used by {@link employe.EmployeService#create}.
         * @param error Error, if any
         * @param [response] Employe
         */
        type CreateCallback = (error: (Error|null), response?: employe.Employe) => void;

        /**
         * Callback as used by {@link employe.EmployeService#update}.
         * @param error Error, if any
         * @param [response] Employe
         */
        type UpdateCallback = (error: (Error|null), response?: employe.Employe) => void;

        /**
         * Callback as used by {@link employe.EmployeService#delete_}.
         * @param error Error, if any
         * @param [response] DeleteRet
         */
        type DeleteCallback = (error: (Error|null), response?: employe.DeleteRet) => void;
    }

    /** Properties of an EmployeById. */
    interface IEmployeById {

        /** EmployeById id */
        id?: (string|null);
    }

    /** Represents an EmployeById. */
    class EmployeById implements IEmployeById {

        /**
         * Constructs a new EmployeById.
         * @param [properties] Properties to set
         */
        constructor(properties?: employe.IEmployeById);

        /** EmployeById id. */
        public id: string;

        /**
         * Creates a new EmployeById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmployeById instance
         */
        public static create(properties?: employe.IEmployeById): employe.EmployeById;

        /**
         * Encodes the specified EmployeById message. Does not implicitly {@link employe.EmployeById.verify|verify} messages.
         * @param message EmployeById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: employe.IEmployeById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmployeById message, length delimited. Does not implicitly {@link employe.EmployeById.verify|verify} messages.
         * @param message EmployeById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: employe.IEmployeById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmployeById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmployeById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): employe.EmployeById;

        /**
         * Decodes an EmployeById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmployeById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): employe.EmployeById;

        /**
         * Verifies an EmployeById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmployeById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmployeById
         */
        public static fromObject(object: { [k: string]: any }): employe.EmployeById;

        /**
         * Creates a plain object from an EmployeById message. Also converts values to other types if specified.
         * @param message EmployeById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: employe.EmployeById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmployeById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteRet. */
    interface IDeleteRet {

        /** DeleteRet deletedCount */
        deletedCount?: (number|null);
    }

    /** Represents a DeleteRet. */
    class DeleteRet implements IDeleteRet {

        /**
         * Constructs a new DeleteRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: employe.IDeleteRet);

        /** DeleteRet deletedCount. */
        public deletedCount: number;

        /**
         * Creates a new DeleteRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteRet instance
         */
        public static create(properties?: employe.IDeleteRet): employe.DeleteRet;

        /**
         * Encodes the specified DeleteRet message. Does not implicitly {@link employe.DeleteRet.verify|verify} messages.
         * @param message DeleteRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: employe.IDeleteRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteRet message, length delimited. Does not implicitly {@link employe.DeleteRet.verify|verify} messages.
         * @param message DeleteRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: employe.IDeleteRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): employe.DeleteRet;

        /**
         * Decodes a DeleteRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): employe.DeleteRet;

        /**
         * Verifies a DeleteRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteRet
         */
        public static fromObject(object: { [k: string]: any }): employe.DeleteRet;

        /**
         * Creates a plain object from a DeleteRet message. Also converts values to other types if specified.
         * @param message DeleteRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: employe.DeleteRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Employe. */
    interface IEmploye {

        /** Employe id */
        id?: (string|null);

        /** Employe nom */
        nom?: (string|null);

        /** Employe prenom */
        prenom?: (string|null);

        /** Employe poste */
        poste?: (string|null);

        /** Employe sexe */
        sexe?: (string|null);

        /** Employe dateNaissance */
        dateNaissance?: (string|null);

        /** Employe urlPhoto */
        urlPhoto?: (string|null);
    }

    /** Represents an Employe. */
    class Employe implements IEmploye {

        /**
         * Constructs a new Employe.
         * @param [properties] Properties to set
         */
        constructor(properties?: employe.IEmploye);

        /** Employe id. */
        public id: string;

        /** Employe nom. */
        public nom: string;

        /** Employe prenom. */
        public prenom: string;

        /** Employe poste. */
        public poste: string;

        /** Employe sexe. */
        public sexe: string;

        /** Employe dateNaissance. */
        public dateNaissance: string;

        /** Employe urlPhoto. */
        public urlPhoto: string;

        /**
         * Creates a new Employe instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Employe instance
         */
        public static create(properties?: employe.IEmploye): employe.Employe;

        /**
         * Encodes the specified Employe message. Does not implicitly {@link employe.Employe.verify|verify} messages.
         * @param message Employe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: employe.IEmploye, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Employe message, length delimited. Does not implicitly {@link employe.Employe.verify|verify} messages.
         * @param message Employe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: employe.IEmploye, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Employe message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Employe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): employe.Employe;

        /**
         * Decodes an Employe message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Employe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): employe.Employe;

        /**
         * Verifies an Employe message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Employe message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Employe
         */
        public static fromObject(object: { [k: string]: any }): employe.Employe;

        /**
         * Creates a plain object from an Employe message. Also converts values to other types if specified.
         * @param message Employe
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: employe.Employe, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Employe to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmployeCreate. */
    interface IEmployeCreate {

        /** EmployeCreate nom */
        nom?: (string|null);

        /** EmployeCreate prenom */
        prenom?: (string|null);

        /** EmployeCreate poste */
        poste?: (string|null);

        /** EmployeCreate sexe */
        sexe?: (string|null);

        /** EmployeCreate dateNaissance */
        dateNaissance?: (string|null);

        /** EmployeCreate urlPhoto */
        urlPhoto?: (string|null);
    }

    /** Represents an EmployeCreate. */
    class EmployeCreate implements IEmployeCreate {

        /**
         * Constructs a new EmployeCreate.
         * @param [properties] Properties to set
         */
        constructor(properties?: employe.IEmployeCreate);

        /** EmployeCreate nom. */
        public nom: string;

        /** EmployeCreate prenom. */
        public prenom: string;

        /** EmployeCreate poste. */
        public poste: string;

        /** EmployeCreate sexe. */
        public sexe: string;

        /** EmployeCreate dateNaissance. */
        public dateNaissance: string;

        /** EmployeCreate urlPhoto. */
        public urlPhoto: string;

        /**
         * Creates a new EmployeCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmployeCreate instance
         */
        public static create(properties?: employe.IEmployeCreate): employe.EmployeCreate;

        /**
         * Encodes the specified EmployeCreate message. Does not implicitly {@link employe.EmployeCreate.verify|verify} messages.
         * @param message EmployeCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: employe.IEmployeCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmployeCreate message, length delimited. Does not implicitly {@link employe.EmployeCreate.verify|verify} messages.
         * @param message EmployeCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: employe.IEmployeCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmployeCreate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmployeCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): employe.EmployeCreate;

        /**
         * Decodes an EmployeCreate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmployeCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): employe.EmployeCreate;

        /**
         * Verifies an EmployeCreate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmployeCreate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmployeCreate
         */
        public static fromObject(object: { [k: string]: any }): employe.EmployeCreate;

        /**
         * Creates a plain object from an EmployeCreate message. Also converts values to other types if specified.
         * @param message EmployeCreate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: employe.EmployeCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmployeCreate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EmployeList. */
    interface IEmployeList {

        /** EmployeList allEmployes */
        allEmployes?: (employe.IEmploye[]|null);
    }

    /** Represents an EmployeList. */
    class EmployeList implements IEmployeList {

        /**
         * Constructs a new EmployeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: employe.IEmployeList);

        /** EmployeList allEmployes. */
        public allEmployes: employe.IEmploye[];

        /**
         * Creates a new EmployeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmployeList instance
         */
        public static create(properties?: employe.IEmployeList): employe.EmployeList;

        /**
         * Encodes the specified EmployeList message. Does not implicitly {@link employe.EmployeList.verify|verify} messages.
         * @param message EmployeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: employe.IEmployeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EmployeList message, length delimited. Does not implicitly {@link employe.EmployeList.verify|verify} messages.
         * @param message EmployeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: employe.IEmployeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmployeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmployeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): employe.EmployeList;

        /**
         * Decodes an EmployeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmployeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): employe.EmployeList;

        /**
         * Verifies an EmployeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EmployeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmployeList
         */
        public static fromObject(object: { [k: string]: any }): employe.EmployeList;

        /**
         * Creates a plain object from an EmployeList message. Also converts values to other types if specified.
         * @param message EmployeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: employe.EmployeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EmployeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: employe.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: employe.IEmpty): employe.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link employe.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: employe.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link employe.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: employe.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): employe.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): employe.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): employe.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: employe.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
