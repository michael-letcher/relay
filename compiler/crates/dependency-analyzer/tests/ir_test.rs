/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<4d5d37a14a41f5a7598f6291fddd1af5>>
 */

mod ir;

use ir::transform_fixture;
use fixture_tests::test_fixture;

#[tokio::test]
async fn base_definitions_change_fragment() {
    let input = include_str!("ir/fixtures/base-definitions-change-fragment.graphql");
    let expected = include_str!("ir/fixtures/base-definitions-change-fragment.expected");
    test_fixture(transform_fixture, "base-definitions-change-fragment.graphql", "ir/fixtures/base-definitions-change-fragment.expected", input, expected).await;
}

#[tokio::test]
async fn base_definitions_change_fragment2() {
    let input = include_str!("ir/fixtures/base-definitions-change-fragment2.graphql");
    let expected = include_str!("ir/fixtures/base-definitions-change-fragment2.expected");
    test_fixture(transform_fixture, "base-definitions-change-fragment2.graphql", "ir/fixtures/base-definitions-change-fragment2.expected", input, expected).await;
}

#[tokio::test]
async fn base_definitions_change_query() {
    let input = include_str!("ir/fixtures/base-definitions-change-query.graphql");
    let expected = include_str!("ir/fixtures/base-definitions-change-query.expected");
    test_fixture(transform_fixture, "base-definitions-change-query.graphql", "ir/fixtures/base-definitions-change-query.expected", input, expected).await;
}

#[tokio::test]
async fn definitions_only_change_fragment() {
    let input = include_str!("ir/fixtures/definitions-only-change-fragment.graphql");
    let expected = include_str!("ir/fixtures/definitions-only-change-fragment.expected");
    test_fixture(transform_fixture, "definitions-only-change-fragment.graphql", "ir/fixtures/definitions-only-change-fragment.expected", input, expected).await;
}

#[tokio::test]
async fn definitions_only_change_query() {
    let input = include_str!("ir/fixtures/definitions-only-change-query.graphql");
    let expected = include_str!("ir/fixtures/definitions-only-change-query.expected");
    test_fixture(transform_fixture, "definitions-only-change-query.graphql", "ir/fixtures/definitions-only-change-query.expected", input, expected).await;
}

#[tokio::test]
async fn definitions_only_no_change() {
    let input = include_str!("ir/fixtures/definitions-only-no-change.graphql");
    let expected = include_str!("ir/fixtures/definitions-only-no-change.expected");
    test_fixture(transform_fixture, "definitions-only-no-change.graphql", "ir/fixtures/definitions-only-no-change.expected", input, expected).await;
}

#[tokio::test]
async fn implicit_dependencies_parent_child() {
    let input = include_str!("ir/fixtures/implicit-dependencies-parent-child.graphql");
    let expected = include_str!("ir/fixtures/implicit-dependencies-parent-child.expected");
    test_fixture(transform_fixture, "implicit-dependencies-parent-child.graphql", "ir/fixtures/implicit-dependencies-parent-child.expected", input, expected).await;
}

#[tokio::test]
async fn new_resolver_field() {
    let input = include_str!("ir/fixtures/new-resolver-field.graphql");
    let expected = include_str!("ir/fixtures/new-resolver-field.expected");
    test_fixture(transform_fixture, "new-resolver-field.graphql", "ir/fixtures/new-resolver-field.expected", input, expected).await;
}

#[tokio::test]
async fn new_resolver_model_field() {
    let input = include_str!("ir/fixtures/new-resolver-model-field.graphql");
    let expected = include_str!("ir/fixtures/new-resolver-model-field.expected");
    test_fixture(transform_fixture, "new-resolver-model-field.graphql", "ir/fixtures/new-resolver-model-field.expected", input, expected).await;
}

#[tokio::test]
async fn new_resolver_model_field_with_custom_fragment() {
    let input = include_str!("ir/fixtures/new-resolver-model-field-with-custom-fragment.graphql");
    let expected = include_str!("ir/fixtures/new-resolver-model-field-with-custom-fragment.expected");
    test_fixture(transform_fixture, "new-resolver-model-field-with-custom-fragment.graphql", "ir/fixtures/new-resolver-model-field-with-custom-fragment.expected", input, expected).await;
}

#[tokio::test]
async fn query_then_fragment() {
    let input = include_str!("ir/fixtures/query-then-fragment.graphql");
    let expected = include_str!("ir/fixtures/query-then-fragment.expected");
    test_fixture(transform_fixture, "query-then-fragment.graphql", "ir/fixtures/query-then-fragment.expected", input, expected).await;
}

#[tokio::test]
async fn recursive_fragments() {
    let input = include_str!("ir/fixtures/recursive-fragments.graphql");
    let expected = include_str!("ir/fixtures/recursive-fragments.expected");
    test_fixture(transform_fixture, "recursive-fragments.graphql", "ir/fixtures/recursive-fragments.expected", input, expected).await;
}

#[tokio::test]
async fn transitive_implicit_dependency() {
    let input = include_str!("ir/fixtures/transitive-implicit-dependency.graphql");
    let expected = include_str!("ir/fixtures/transitive-implicit-dependency.expected");
    test_fixture(transform_fixture, "transitive-implicit-dependency.graphql", "ir/fixtures/transitive-implicit-dependency.expected", input, expected).await;
}
