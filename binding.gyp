{
  "targets": [{
    "target_name": "node_coz",
    "cflags!": [ "-fno-exceptions", "-ldl" ],
    "cflags_cc!": [ "-fno-exceptions", "-ldl" ],
    "sources": [ "addon.cpp" ],
    'include_dirs': [
      "<!@(node -p \"require('node-addon-api').include\")"
    ],
    'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
  }]
}