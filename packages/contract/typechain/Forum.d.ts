/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ForumInterface extends ethers.utils.Interface {
  functions: {
    "addComment(uint256,string)": FunctionFragment;
    "addPost(string)": FunctionFragment;
    "getComment(uint256)": FunctionFragment;
    "getCommentKarma(address)": FunctionFragment;
    "getNumberOfComments(uint256)": FunctionFragment;
    "getPost(uint256)": FunctionFragment;
    "getPostComments(uint256)": FunctionFragment;
    "getPostCommentsPaged(uint256,uint256,uint256)": FunctionFragment;
    "getPostKarma(address)": FunctionFragment;
    "getRecentPosts(uint8)": FunctionFragment;
    "getVotes(uint256)": FunctionFragment;
    "voteForComment(uint256,int8)": FunctionFragment;
    "voteForPost(uint256,int8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addComment",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "addPost", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getComment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCommentKarma",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfComments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPost",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPostComments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPostCommentsPaged",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPostKarma",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecentPosts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForComment",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voteForPost",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addComment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getComment", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCommentKarma",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfComments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPostComments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPostCommentsPaged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPostKarma",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecentPosts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voteForComment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteForPost",
    data: BytesLike
  ): Result;

  events: {
    "NewComment(uint256,address,uint256)": EventFragment;
    "NewPost(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewComment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPost"): EventFragment;
}

export type NewCommentEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    id: BigNumber;
    author: string;
    postId: BigNumber;
  }
>;

export type NewPostEvent = TypedEvent<
  [BigNumber, string] & { id: BigNumber; author: string }
>;

export class Forum extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ForumInterface;

  functions: {
    addComment(
      postId: BigNumberish,
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPost(
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getComment(
      commentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, BigNumber, string, BigNumber] & {
          id: BigNumber;
          author: string;
          postId: BigNumber;
          contentCID: string;
          createdAtBlock: BigNumber;
        }
      ]
    >;

    getCommentKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNumberOfComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPost(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, BigNumber] & {
          id: BigNumber;
          author: string;
          contentCID: string;
          createdAtBlock: BigNumber;
        }
      ]
    >;

    getPostComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, BigNumber, string, BigNumber] & {
          id: BigNumber;
          author: string;
          postId: BigNumber;
          contentCID: string;
          createdAtBlock: BigNumber;
        })[]
      ]
    >;

    getPostCommentsPaged(
      postId: BigNumberish,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, BigNumber, string, BigNumber] & {
          id: BigNumber;
          author: string;
          postId: BigNumber;
          contentCID: string;
          createdAtBlock: BigNumber;
        })[]
      ]
    >;

    getPostKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRecentPosts(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, string, BigNumber] & {
          id: BigNumber;
          author: string;
          contentCID: string;
          createdAtBlock: BigNumber;
        })[]
      ]
    >;

    getVotes(
      postOrCommentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    voteForComment(
      commentId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteForPost(
      postId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addComment(
    postId: BigNumberish,
    contentCID: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPost(
    contentCID: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getComment(
    commentId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, string, BigNumber] & {
      id: BigNumber;
      author: string;
      postId: BigNumber;
      contentCID: string;
      createdAtBlock: BigNumber;
    }
  >;

  getCommentKarma(
    author: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNumberOfComments(
    postId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPost(
    postId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber] & {
      id: BigNumber;
      author: string;
      contentCID: string;
      createdAtBlock: BigNumber;
    }
  >;

  getPostComments(
    postId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, BigNumber, string, BigNumber] & {
      id: BigNumber;
      author: string;
      postId: BigNumber;
      contentCID: string;
      createdAtBlock: BigNumber;
    })[]
  >;

  getPostCommentsPaged(
    postId: BigNumberish,
    offset: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, BigNumber, string, BigNumber] & {
      id: BigNumber;
      author: string;
      postId: BigNumber;
      contentCID: string;
      createdAtBlock: BigNumber;
    })[]
  >;

  getPostKarma(author: string, overrides?: CallOverrides): Promise<BigNumber>;

  getRecentPosts(
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, string, BigNumber] & {
      id: BigNumber;
      author: string;
      contentCID: string;
      createdAtBlock: BigNumber;
    })[]
  >;

  getVotes(
    postOrCommentId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  voteForComment(
    commentId: BigNumberish,
    voteValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteForPost(
    postId: BigNumberish,
    voteValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addComment(
      postId: BigNumberish,
      contentCID: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addPost(contentCID: string, overrides?: CallOverrides): Promise<void>;

    getComment(
      commentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, BigNumber] & {
        id: BigNumber;
        author: string;
        postId: BigNumber;
        contentCID: string;
        createdAtBlock: BigNumber;
      }
    >;

    getCommentKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPost(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        id: BigNumber;
        author: string;
        contentCID: string;
        createdAtBlock: BigNumber;
      }
    >;

    getPostComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, BigNumber, string, BigNumber] & {
        id: BigNumber;
        author: string;
        postId: BigNumber;
        contentCID: string;
        createdAtBlock: BigNumber;
      })[]
    >;

    getPostCommentsPaged(
      postId: BigNumberish,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, BigNumber, string, BigNumber] & {
        id: BigNumber;
        author: string;
        postId: BigNumber;
        contentCID: string;
        createdAtBlock: BigNumber;
      })[]
    >;

    getPostKarma(author: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRecentPosts(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, string, BigNumber] & {
        id: BigNumber;
        author: string;
        contentCID: string;
        createdAtBlock: BigNumber;
      })[]
    >;

    getVotes(
      postOrCommentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voteForComment(
      commentId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    voteForPost(
      postId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewComment(uint256,address,uint256)"(
      id?: BigNumberish | null,
      author?: string | null,
      postId?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { id: BigNumber; author: string; postId: BigNumber }
    >;

    NewComment(
      id?: BigNumberish | null,
      author?: string | null,
      postId?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { id: BigNumber; author: string; postId: BigNumber }
    >;

    "NewPost(uint256,address)"(
      id?: BigNumberish | null,
      author?: string | null
    ): TypedEventFilter<[BigNumber, string], { id: BigNumber; author: string }>;

    NewPost(
      id?: BigNumberish | null,
      author?: string | null
    ): TypedEventFilter<[BigNumber, string], { id: BigNumber; author: string }>;
  };

  estimateGas: {
    addComment(
      postId: BigNumberish,
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPost(
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getComment(
      commentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCommentKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPost(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPostComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPostCommentsPaged(
      postId: BigNumberish,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPostKarma(author: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRecentPosts(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotes(
      postOrCommentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voteForComment(
      commentId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteForPost(
      postId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addComment(
      postId: BigNumberish,
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPost(
      contentCID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getComment(
      commentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCommentKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPost(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPostComments(
      postId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPostCommentsPaged(
      postId: BigNumberish,
      offset: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPostKarma(
      author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecentPosts(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotes(
      postOrCommentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voteForComment(
      commentId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteForPost(
      postId: BigNumberish,
      voteValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
