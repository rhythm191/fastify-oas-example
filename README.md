# fastify-oas-exmaple

fastify の JSON スキーマから OpenAPI Specification を生成するサンプルプログラムです。
OpenAPI Specification は JSON、YAML の両形式でコミット時に自動的に docs フォルダに生成されます。

## 仕組み

[fastify-swagger](https://github.com/fastify/fastify-swagger)を使って、JSON スキーマから OpenAPI を作り出しています。
手動で生成する場合は次のコマンドを使います。

```
npm run build:docs
```

このコマンドは [husky](https://typicode.github.io/husky/#/) を使い、コミット前に自動で実行されます。

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
