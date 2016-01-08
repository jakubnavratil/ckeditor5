/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

import MoveOperation from './moveoperation.js';
import RemoveOperation from './removeoperation.js';

/**
 * Operation to reinsert previously removed nodes back to the non-graveyard root.
 * This is basically {@link treeModel.operation.MoveOperation} but it returns
 * {@link treeModel.operation.RemoveOperation} when reversed.
 *
 * With this class, we achieve two goals: by having separate classes it's easier to distinguish whether move
 * operation is actually a remove/reinsert operation and fire proper events. Also it
 * will be easier to expand if we need to change operation's behavior if it is remove/reinsert.
 *
 * @class treeModel.operation.ReinsertOperation
 */
export default class ReinsertOperation extends MoveOperation {
	getReversed() {
		return new RemoveOperation( this.targetPosition, this.howMany, this.baseVersion + 1 );
	}

	get type() {
		return 'reinsert';
	}
}