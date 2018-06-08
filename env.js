clusters = [
	    {
		          NAME: "prod",
		          KAFKA_REST: "localhost:8082",
		          MAX_BYTES: "50000",
		          RECORD_POLL_TIMEOUT: "5000",
		          DEBUG_LOGS_ENABLED: true
		        },
	    {
		          NAME: "dev",
		          KAFKA_REST: "localhost",
		          MAX_BYTES: "50000",
		          COLOR: "#141414", // Optional
		          RECORD_POLL_TIMEOUT: "5000",
		          DEBUG_LOGS_ENABLED: true
		        }
	  ];
