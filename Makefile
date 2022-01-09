# support for .env file
ifneq (,$(wildcard ./.env))
    include .env
    export
endif 

protos:
	pnpx protoc -I ${GOOGLE_API_PROTO_DIR} \
		--proto_path ${PROTO_DIR} \
		--ts_opt long_type_string \
		--ts_opt generate_dependencies \
		--ts_out ./src/lib/gen \
		${PROTO_DIR}/*	
