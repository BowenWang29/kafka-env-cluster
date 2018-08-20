# kafka-env-cluster

This repo helps you set up a kafka cluster with zookeeper and kafka based on docker images from confluent. Modify the corresponding **docker-compose.yaml** and **.env** to initialze nodes with different roles.

## Quick start:
```
docker-compose up -d zk_1
docker-compose up -d kafka_1
```
## Zookeeper
Zookeeper-shell:
```
zookeeper-shell smartaqnet-0-node0:22181
```
## Kafka
Create a topic with the number of replications set to 3 and retention set to permenant(-1):
```
kafka-topics --zookeeper smartaqnet-0-node0:22181 --create --topic aTopic --replication-factor 3 --partitions 1 --config retention.ms=-1
```
Check the result:
```
kafka-topics --zookeeper smartaqnet-0-node0:22181 --describe --topic aTopic
```

